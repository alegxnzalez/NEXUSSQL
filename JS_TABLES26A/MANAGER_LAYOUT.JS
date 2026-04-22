// MANAGER_LAYOUT.js

window.MANAGER_LAYOUT = {
  "tables": {
    "MANAGER_LAYOUT": {
      "description": "This defines a custom screen that is used to view or edit entitys in the system",
      "columns": {
        "MANAGER_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "MANAGER_LAYOUT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "MANAGER_LAYOUT_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The name of the manager layout record as it pertains to a user"
},
        "ENTITY_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "This is the top level business object that defines the map of child records"
},
        "POST_SAVE_NAV": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
                    "GR",
                    "M",
                    "L"
          ],
          "info": "This is the location the screen will navigate to after a record has been saved"
},
        "MANAGER_LAYOUT_XML": {
          "type": "CLOB",
          "nullable": true,
          "info": "The XML that the layout manager UI manipulates to generate child records"
},
        "MANAGER_LAYOUT_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "E",
                    "V",
                    "A"
          ],
          "info": "The type of Manager Layout, either (E)dit or (V)iew."
},
        "TOTAL_STEPS": {
          "type": "NUMBER",
          "nullable": true
},
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If the manager layout is a template then the manager_layout_xml will include links to the public files to build the manager layout document.  Otherwise the manager_layout_xml will be the marked up version of the layout document"
},
        "DISPLAY_UOM_AS_ENTERED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If this is true all UOMs in this manager layout will display their values as they were entered instead of converting to user preference"
},
        "DIRECTORY_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "FOLDER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PARENT_MANAGER_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MANAGER_LAYOUT",
          "info": "The parent manager layout gid is the template that this record was created from"
},
        "SUPPORTS_ADD_FIELD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Determines if this manager layout allows fields to be added in the toolkit"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "TITLE": {
          "type": "VARCHAR2(2001)",
          "nullable": true,
          "info": "Title of Page"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "ACTION",
        "MANAGER_LAYOUT",
        "MANAGER_LAYOUT_XML"
]
    }
  }
};