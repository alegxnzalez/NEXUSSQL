// ATTRIBUTE_RULE_DETAIL.js

window.ATTRIBUTE_RULE_DETAIL = {
  "tables": {
    "ATTRIBUTE_RULE_DETAIL": {
      "columns": {
        "ATTRIBUTE_RULE_DETAIL_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "ATTRIBUTE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ATTRIBUTE_RULE"
        },
        "ATTRIBUTE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ATTRIBUTE_VALUES": {
          "type": "VARCHAR2(400)",
          "nullable": false,
          "info": "Holds a set of attribute values with comma as a seperator. "
        },
        "OPERATOR": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "OneOf",
            "NoneOf",
            "GreaterThan",
            "GreaterThanEqual",
            "LessThan",
            "LessThanEqual"
          ],
          "info": "Could take values ONE OF, NOT ONE OF "
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
        "QUANTITY_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Quantity Value in User entered UOM. "
        },
        "UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM Code for Quantity. "
        },
        "QUANTITY_BASE_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "quantity value in default UOM."
        }
      },
      "fk_tables": []
    }
  }
};
