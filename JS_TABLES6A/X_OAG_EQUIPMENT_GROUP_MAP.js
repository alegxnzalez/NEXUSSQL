// X_OAG_EQUIPMENT_GROUP_MAP.js

window.X_OAG_EQUIPMENT_GROUP_MAP = {
  "tables": {
    "X_OAG_EQUIPMENT_GROUP_MAP": {
      "columns": {
        "EQUIPMENT": {
          "type": "VARCHAR2(3)",
          "nullable": false,
          "key_value": true
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        }
      },
      "fk_tables": []
    }
  }
};
