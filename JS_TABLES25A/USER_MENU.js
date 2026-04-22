// USER_MENU.js

window.USER_MENU = {
  "tables": {
    "USER_MENU": {
      "columns": {
        "USER_MENU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "USER_MENU_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "USER_MENU_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "URL": {
          "type": "VARCHAR2(300)",
          "nullable": false
        },
        "EXPAND_BY_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "EXPANDABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "PARENT_MENU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_MENU",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "CATEGORY_LABLE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "MENU_LEVEL": {
          "type": "NUMBER(1)",
          "nullable": false,
          "values": [
            "0",
            "1",
            "2"
          ]
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
        "USER_MENU",
        "USER_MENU_PERMISSION"
      ]
    }
  }
};
