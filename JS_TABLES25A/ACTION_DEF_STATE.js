// ACTION_DEF_STATE.js

window.ACTION_DEF_STATE = {
  "tables": {
    "ACTION_DEF_STATE": {
      "columns": {
        "ACTION_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTION_DEF"
        },
        "STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "ACTION_CLASS": {
          "type": "VARCHAR2(500)",
          "nullable": false
        },
        "IS_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_SELECTION_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Signifies if this state is the default state for an action when multiple inputs are present. "
        },
        "IS_FINAL_STATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if this is the final state for an action. 'Y', 'N'"
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
