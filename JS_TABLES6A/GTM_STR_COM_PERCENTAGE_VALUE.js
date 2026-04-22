// GTM_STR_COM_PERCENTAGE_VALUE.js

window.GTM_STR_COM_PERCENTAGE_VALUE = {
  "tables": {
    "GTM_STR_COM_PERCENTAGE_VALUE": {
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
        "GTM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE_COMPONENT"
        },
        "GTM_STRUCTURE_COMPONENT_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE_COMPONENT"
        },
        "GTM_PERCENTAGE_VALUE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PERCENTAGE_VALUE_QUAL"
        },
        "PERCENTAGE_VALUE": {
          "type": "NUMBER()",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
