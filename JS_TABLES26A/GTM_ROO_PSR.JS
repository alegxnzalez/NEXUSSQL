// GTM_ROO_PSR.js

window.GTM_ROO_PSR = {
  "tables": {
    "GTM_ROO_PSR": {
      "description": "Captures data of rules of origin - product-specific rules.",
      "columns": {
        "GTM_RULES_OF_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_RULES_OF_ORIGIN",
          "info": "Rules of origin ID."
},
        "SEQUENCE_NUMBER": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number."
},
        "START_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Defines the code level starting range."
},
        "END_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Defines the code level ending range."
},
        "SUFFIX": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "Holds the suffix value."
},
        "ATTRIBUTE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Holds the description."
},
        "IS_EX": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Determines if rollup to parent Harmonized System code is needed."
},
        "EXPRESSION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The rule is captured with an AND/OR operator."
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
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "External reference code for the rule."
},
        "SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Short name for the rule."
}
      },
      "fk_tables": [
        "GTM_ROO_PSR_DESCRIPTION"
]
    }
  }
};