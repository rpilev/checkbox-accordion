# Checkbox Accordion
An accordion plugin with checkboxes for Javascript with an example template included

## Usage
Include accordion.js ( from \imports\accordion\js\ ) and accordion.css ( from \imports\accordion\css\ ) to your project

Create a new instance and set the appropriate options

    accordion = new Accordion({
      targetId: 'accordion',
      pathToThumbnails: './img/accordion/',
      data: []
    });

    accordion.initialize();


## Options

* data - the data to be presented by the accordion

Data structure:

    // An array of objects representing each tab
    [
      {
        // The title of the tab (string)
        tab_title: 'Example Tab title'
        // An array of objects representing each list item in a tab
        tab_selections: [
          {
            // The title of the list item (string)
            item_title: "Example list item title"
            // The description of the list item (string)
            item_description: 'Example description',
            // The file name of the thumbnail (string)
            item_img: 'example_filename.jpg'
          }
        ]
      }
    ]
* pathToThumbnails - the path to the thumbnails to be used by the list items
* targetId - the id of the HTML element to contain the slider

## Live example

A live preview of this project is available at:
[http://checkbox-accordion.surge.sh/](http://checkbox-accordion.surge.sh/)
