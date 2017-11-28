/**
 * Simple Accordion Plugin
 * Author: Raul Špilev
 * License: MIT
 */

(function() {
  this.Accordion = function() {
    let defaults = {
      pathToThumbnails: './',
      targetId: 'accordion',
      data: []
    }
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }
  }

  function extendDefaults(source, properties) {
    let property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  Accordion.prototype.initialize = function() {

    renderAccordion.call(this);

    setUpTabAnimations.call(this);

    this.selections = [];

    setUpSelections.call(this);
    
  };

  function getCurrentSelectionsNr(tabIndex, selections) {
    let nr_of_selections = 0;
    for (let i=0;i<selections[tabIndex].length;i++) {
      if(selections[tabIndex][i].selected) {
        nr_of_selections++;
      }
    }
    return nr_of_selections;
  }

  function checkFinalButton() {
    selections = this.selections;

    let touchedTabs = 0;

    for (let i=0;i<selections.length;i++) {
      for (let j=0;j<selections[i].length;j++) {
        if(selections[i][j].selected) {
          touchedTabs++;
          break;
        }
      }
    }

    if(touchedTabs == selections.length){
      document.getElementById('final-button').disabled = false;     
    } else {
      document.getElementById('final-button').disabled = true;
    }
  }

  function selectCheckbox(tabIndex, selectIndex) {

    let selections = this.selections;

    if(selections[tabIndex][selectIndex].selected) {
      document.getElementById('checkbox-'+tabIndex+'-'+selectIndex).checked = false;
      document.getElementById('checkbox-'+tabIndex+'-'+selectIndex).parentNode.parentNode.style.backgroundColor = 'white';
      selections[tabIndex][selectIndex].selected = false;

      let nr_of_selections = getCurrentSelectionsNr(tabIndex, selections);
      
      document.getElementById('select-counter-' + tabIndex).innerHTML = nr_of_selections + ' / 3';
      checkFinalButton.call(this);
      return;
    }


    let nr_of_selections = getCurrentSelectionsNr(tabIndex, selections);

    if(nr_of_selections == 3){
      document.getElementById('checkbox-'+tabIndex+'-'+selectIndex).checked = false;
      checkFinalButton.call(this);
      return;
    }

    selections[tabIndex][selectIndex].selected = true;
    document.getElementById('checkbox-'+tabIndex+'-'+selectIndex).parentNode.parentNode.style.backgroundColor = '#fffdef';
    nr_of_selections++;
    document.getElementById('select-counter-' + tabIndex).innerHTML = nr_of_selections + ' / 3';

    checkFinalButton.call(this);
  }

  function setUpSelections() {
    data = this.options.data;

    for(let i=0;i<data.length;i++) {
      this.selections[i] = [];
      for(let j=0;j<data[i].tab_selections.length;j++) {
        this.selections[i].push({
          selection_index: j,
          selected: false
        })
      }
    }

    tabcontents = document.getElementsByClassName('accordion-checkbox');

    for (let i=0;i<tabcontents.length;i++) {
      tabcontents[i].addEventListener('click', function(e) {
        selectCheckbox.call(this, e.target.dataset.tab, e.target.dataset.selection);
      }.bind(this));
    }
  }

  function openTab(index) {
    tabcontents = document.getElementsByClassName('accordion-tab-content');

    //close all other tabs
    for(i=0;i<tabcontents.length;i++) {
      tabcontents[i].style.display = 'none';
      tabcontents[i].style.transform = 'scaleY(0)'; 
    }

    //open selected tab
    document.getElementById('accodion-content-tab-' + index).style.display = 'block';
    setTimeout(function() {
      document.getElementById('accodion-content-tab-' + index).style.transform = 'scaleY(1)'; 
    }, 10);
  }

  
  function setUpTabAnimations() {
    tabcontents = document.getElementsByClassName('accordion-tab-content');

    //open the first tab
    tabcontents[0].style.display = 'block';
    tabcontents[0].style.transform = 'scaleY(1)'; 
  
    tabsHeaders = document.getElementsByClassName('accordion-tab-header');
    redButtons = document.getElementsByClassName('red-button');
    
    //add click eventlisteners
    for(let i=0;i<tabsHeaders.length;i++) {

      tabsHeaders[i].addEventListener('click', function(e) {
        openTab(e.target.dataset.tabid);
        tabsHeaders[e.target.dataset.tabid].scrollIntoView({ 
          behavior: 'smooth',
          block: "start",
          inline: "nearest"
        });
      });
    }    
    for(let i=0;i<tabsHeaders.length-1;i++) {
      redButtons[i].addEventListener('click', function(e) {
        openTab(e.target.dataset.tabid);
        tabsHeaders[e.target.dataset.tabid].scrollIntoView({ 
          behavior: 'smooth',
          block: "start",
          inline: "nearest"
        });
      });
    }  
  }

  function renderAccordion() {

    let data = this.options.data;

    let accordionHTML = '\
      <div class="container">\
    ';

    let hidden = '';

    for(let i=0; i<data.length;i++) {
      if(i!=0){
        hidden = 'style="display:none;"';
      }else {
        hidden = '';
      }
      accordionHTML += '\
        <div class="tab">\
          <div class="accordion-tab-header" data-tabid="'+i+'">\
            <h3 class="accordion-tab-title" data-tabid="'+i+'">'+data[i].tab_title+'</h3>\
            <p class="accordion-tab-selection-number" id="select-counter-'+i+'">0 / 3</p>\
          </div>\
          <div class="accordion-tab-content" id="accodion-content-tab-'+i+'">\
            <table>';
            for(let j=0; j<data[i].tab_selections.length;j++){
              accordionHTML += '\
                <tr class="accordion-tab-content-row">\
                  <td><input type="checkbox" id="checkbox-'+i+'-'+j+'" data-tab="'+i+'" data-selection="'+j+'" class="accordion-checkbox" name="accordion-checkbox"><label for="checkbox-'+i+'-'+j+'"></label></td>\
                  <td><img alt="accordion-thumbnail" class="accordion-thumbnail" src="'+this.options.pathToThumbnails+data[i].tab_selections[j].item_img+'"></td>\
                  <td>\
                    <h4 class="accordion-tab-content-title">\
                      '+data[i].tab_selections[j].item_title+'\
                    </h4>\
                    <p class="accordion-tab-content-description">\
                      '+data[i].tab_selections[j].item_description+'\
                    </p>\
                  </td>\
                </tr>';
          }
          if (i!=data.length-1) {
            accordionHTML += '\
                </table>\
                <button class="red-button" data-tabid="'+ parseInt(i+1) +'">Järgmine teema</button>\
              </div>\
            </div>\
            ';
          } else {
            accordionHTML += '\
                </table>\
              </div>\
            </div>\
            ';
          }
    }

    accordionHTML += '\
        <button id="final-button" disabled>Valmis!</button>\
      </div>\
    ';

    document.getElementById(this.options.targetId).innerHTML = accordionHTML;

  }


}())