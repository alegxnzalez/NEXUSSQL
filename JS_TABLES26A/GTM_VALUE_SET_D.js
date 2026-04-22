// GTM_VALUE_SET_D.js

window.GTM_VALUE_SET_D = {
  "tables": {
    "GTM_VALUE_SET_D": {
      "description": "To define the Value Qualifiers associated to a particular Value Set.",
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
        "GTM_VALUE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_SET",
          "info": "Value Set ID"
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "Value Qualifier ID"
},
        "METHOD_OF_CALCULATION": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
                    "M",
                    "F"
          ],
          "info": "Decides if the Value Qualifier value has to be enterred manually by the user or calculated by the associated formula."
}
      },
      "fk_tables": []
    }
  }
};