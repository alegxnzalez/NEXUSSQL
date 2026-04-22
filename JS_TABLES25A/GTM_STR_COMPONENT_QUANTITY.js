// GTM_STR_COMPONENT_QUANTITY.js

window.GTM_STR_COMPONENT_QUANTITY = {
  "tables": {
    "GTM_STR_COMPONENT_QUANTITY": {
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
          "foreign_key": "GTM_STRUCTURE_COMPONENT",
          "info": "GTM_STRUCTURE_GID contains the unique identifier for the trade item structure. "
        },
        "GTM_STRUCTURE_COMPONENT_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE_COMPONENT",
          "info": "Trade Item Structure Component Sequence Number "
        },
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_QUANTITY_TYPE",
          "info": "A pointer to the quantity type. For example: Weight, Net Weight, Quantity etc "
        },
        "QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Value for the specified quantity type."
        },
        "QUANTITY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
