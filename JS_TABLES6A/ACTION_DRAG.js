// ACTION_DRAG.js

window.ACTION_DRAG = {
  "tables": {
    "ACTION_DRAG": {
      "columns": {
        "ACTION_DRAG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ACTION_DRAG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "FROM_QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE",
          "info": "origin query of a drag and drop "
        },
        "TO_QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE",
          "info": "target query of a drag and drop "
        },
        "ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTION",
          "info": "action to run when performing a drag and drop "
        },
        "STATE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "action_def_state to invoke for a drag and drop"
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
