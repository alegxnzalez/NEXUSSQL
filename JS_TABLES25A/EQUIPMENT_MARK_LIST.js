// EQUIPMENT_MARK_LIST.js

window.EQUIPMENT_MARK_LIST = {
  "tables": {
    "EQUIPMENT_MARK_LIST": {
      "columns": {
        "EQUIPMENT_MARK_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique Equipment Mark List. "
        },
        "EQUIPMENT_MARK_LIST_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The Equipment Mark List. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The description of the Equipment Mark List."
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
      "fk_tables": [
        "DM_RULE",
        "EQUIPMENT_MARK_LIST_DETAIL",
        "SERVPROV"
      ]
    }
  }
};
