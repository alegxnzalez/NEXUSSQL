// AUTO_ASSIGN_RULE_PRE_QUAL_LIST.js

window.AUTO_ASSIGN_RULE_PRE_QUAL_LIST = {
  "tables": {
    "AUTO_ASSIGN_RULE_PRE_QUAL_LIST": {
      "columns": {
        "AUTO_ASSIGN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE",
          "info": "Auto-assignment rule "
        },
        "LIST_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence within the rule to keep list items unique "
        },
        "VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A value in the list "
        },
        "VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "2nd value in the list, if needed "
        },
        "VALUE1UOM": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "If VALUE1 represents a UOM field (weight, volume, etc.), this field contains the UOM value (LB, CUFT, etc.) "
        },
        "VALUE2UOM": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "If VALUE2 represents a UOM field (weight, volume, etc.), this field contains the UOM value (LB, CUFT, etc.)"
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
        }
      },
      "fk_tables": []
    }
  }
};
