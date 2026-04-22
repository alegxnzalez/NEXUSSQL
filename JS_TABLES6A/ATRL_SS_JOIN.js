// ATRL_SS_JOIN.js

window.ATRL_SS_JOIN = {
  "tables": {
    "ATRL_SS_JOIN": {
      "columns": {
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SPECIAL_SERVICE"
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(80)",
          "nullable": false,
          "values": [
            "DRIVER",
            "EQUIPMENT",
            "POWER_UNIT"
          ],
          "key_value": true,
          "info": "User can define different compatible set for different object type. "
        },
        "ATTRIBUTE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ATTRIBUTE_RULE",
          "info": "Attribute rule for this special service"
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
