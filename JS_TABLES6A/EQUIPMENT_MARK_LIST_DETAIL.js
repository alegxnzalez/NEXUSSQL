// EQUIPMENT_MARK_LIST_DETAIL.js

window.EQUIPMENT_MARK_LIST_DETAIL = {
  "tables": {
    "EQUIPMENT_MARK_LIST_DETAIL": {
      "columns": {
        "EQUIPMENT_MARK_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_MARK_LIST",
          "info": "The Equipment Mark List. "
        },
        "EQUIPMENT_MARK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_MARK",
          "info": "The Equipment Mark."
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
