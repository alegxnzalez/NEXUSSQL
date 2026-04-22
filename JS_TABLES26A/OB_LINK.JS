// OB_LINK.js

window.OB_LINK = {
  "tables": {
    "OB_LINK": {
      "description": "The table holds associations between two order base objects. The relationship can not be circular i.e. it should not be possible to have a relationship OB1 - OB2 and OB2 - OB1.",
      "columns": {
        "PREV_ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "Order Base Gid of the previous order in the life cycle"
},
        "NEXT_ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "Order Base Gid of the next order in the life cycle"
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