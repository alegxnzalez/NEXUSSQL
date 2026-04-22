// GTM_STRUCTURE_COMPONENT.js

window.GTM_STRUCTURE_COMPONENT = {
  "tables": {
    "GTM_STRUCTURE_COMPONENT": {
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
          "foreign_key": "GTM_STRUCTURE",
          "info": "GTM_STRUCTURE_GID contains the unique identifier for the trade item structure. "
        },
        "GTM_STRUCTURE_COMPONENT_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Trade Item Structure Component Sequence Number "
        },
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "Component Identification ID. Component can be identified either by Trade Item ID or by Product Classification Code "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Component Description "
        },
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_CODE",
          "info": "Component Identification ID. Component can be identified either by Trade Item ID or by Product Classification Code "
        },
        "COUNTRY_OF_ORIGIN": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Components country of origin"
        }
      },
      "fk_tables": [
        "GTM_STR_COMPONENT_CURRENCY",
        "GTM_STR_COMPONENT_QUANTITY",
        "GTM_STR_COMPONENT_REFNUM",
        "GTM_STR_COMPONENT_REMARK",
        "GTM_STR_COM_PERCENTAGE_VALUE"
      ]
    }
  }
};
