// GTM_CRULE_ITEM_STR_RESTRICTION.js

window.GTM_CRULE_ITEM_STR_RESTRICTION = {
  "tables": {
    "GTM_CRULE_ITEM_STR_RESTRICTION": {
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
        "GTM_CRULE_ITEM_STR_RES_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_RULE"
        },
        "DATE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DATE_QUALIFIER"
        },
        "TRADE_DIRECTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "E",
            "I"
          ]
        },
        "GTM_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONSTRAINT_SET"
        },
        "SKIP_CHILD_LINE_CREATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag to specify whether to create child lines or assign Item Structure ID to the Transaction Line. Options are: 'Y' - Assign Item Structure ID Only; 'N' - Assign Item Structure ID and Create Child Lines."
        }
      },
      "fk_tables": []
    }
  }
};
