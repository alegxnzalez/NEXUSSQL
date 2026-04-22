// PROP_METADATA.js

window.PROP_METADATA = {
  "tables": {
    "PROP_METADATA": {
      "description": "A denormalization of property meta-data for use with Finders, Managers and other standard user interface elements. This table is recreated on every restart of the server. Customers can use this table for informational purposes but should not change the contents.",
      "columns": {
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
        "PROP_KEY": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true,
          "info": "The key or pattern representing the property meta-data."
},
        "PROP_GROUP": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The hierarchical menu group (e.g. Workflow/Cleanup) for the property."
},
        "PURPOSE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The top-level property ownership (e.g. Machine Learning) for the property."
},
        "FREQUENCY": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
                    "COMMON",
                    "RARE",
                    "INTERNAL"
          ],
          "info": "The frequency of property usage."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "An optional, brief English summary of the property. This is used for tree tooltips and property searches."
},
        "TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "STRING",
                    "PATTERN",
                    "BOOLEAN",
                    "INTEGER",
                    "DOUBLE",
                    "LIST",
                    "GID",
                    "FILE",
                    "URL",
                    "CLASS",
                    "OPTIONS"
          ],
          "info": "The property data type."
},
        "TYPE_QUALIFIERS": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Additional qualifiers for the property data type, if needed."
},
        "IS_MULTIPLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the property supports multiple values."
},
        "IS_PASSWORD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the property represents a password or other secure information."
},
        "IS_DEPRECATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the property has been deprecated."
},
        "DEFAULT_VALUE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The default value to specify in the Property Servlet when a user adds the property."
},
        "RELEASE_INTRODUCED": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The release where the property was first introduced."
},
        "HELP": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "An online help link for the property."
},
        "ACR_ROLE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Role for filtering of property display by ACR role."
}
      },
      "fk_tables": []
    }
  }
};