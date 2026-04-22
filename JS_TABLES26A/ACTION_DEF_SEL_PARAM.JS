// ACTION_DEF_SEL_PARAM.js

window.ACTION_DEF_SEL_PARAM = {
  "tables": {
    "ACTION_DEF_SEL_PARAM": {
      "description": "Contains input parameters for multiple object selections.",
      "columns": {
        "ACTION_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTION_DEF"
},
        "PARAM_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUERY_TABLE",
          "info": "Query table specifies type of input."
},
        "MULTIPLE_INPUTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if multiple values are allowed."
},
        "MAIN_PARAM": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this parameter is the main business object for the action."
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};