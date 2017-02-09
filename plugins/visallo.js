exports.defineTags = function(dictionary) {
    dictionary.defineTag("flight", {
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            if (tag.value) {
                doclet.classdesc = tag.value
            }
            (doclet.mixes || (doclet.mixes = [])).push('FlightComponent')
            doclet.componentType = 'flight'
        }
    });
    dictionary.defineTag("react", {
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            if (tag.value) {
                doclet.classdesc = tag.value
            }
            (doclet.mixes || (doclet.mixes = [])).push('ReactComponent')
            doclet.componentType = 'react'
        }
    });
    dictionary.defineTag("extensionpoint", {
        mustHaveValue: true,
        canHaveType: true,
        canHaveName: true,
        onTagged: function(doclet, tag) {
            doclet.extensionpoints = doclet.extensionpoints || [];
            doclet.extensionpoints.push(tag.value);
        }
    });
    dictionary.defineTag("attr", {
        mustHaveValue: true,
        canHaveType: true,
        canHaveName: true,
        onTagged: function(doclet, tag) {
            doclet.attrs = doclet.attrs || [];
            doclet.attrs.push(tag.value);
        }
    })
};

