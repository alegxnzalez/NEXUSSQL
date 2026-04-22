// TIME_WINDOW.js

window.TIME_WINDOW = {
  "tables": {
    "TIME_WINDOW": {
      "columns": {
        "TIME_WINDOW_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "a collection of recurring points or spans in time "
        },
        "TIME_WINDOW_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "TIME_WINDOW_TYPE": {
          "type": "VARCHAR2(32)",
          "nullable": false,
          "values": [
            "POINT",
            "SPAN"
          ],
          "info": "point or span"
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
        "CONSOLIDATION_PROFILE",
        "DELIVERY_WINDOW_PROFILE",
        "TIME_WINDOW_WEEKLY_D"
      ]
    }
  }
};
