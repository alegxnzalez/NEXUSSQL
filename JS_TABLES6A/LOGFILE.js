// LOGFILE.js

window.LOGFILE = {
  "tables": {
    "LOGFILE": {
      "columns": {
        "LOGFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOGFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "Ad Hoc",
            "System",
            "User",
            "Web"
          ]
        },
        "FILENAME": {
          "type": "VARCHAR2(255)",
          "nullable": false
        },
        "APPEND": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "MAX_SIZE": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "NUM_BACKUPS": {
          "type": "NUMBER(4)",
          "nullable": false
        },
        "OFF": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
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
        "LOGFILE_DETAIL"
      ]
    }
  }
};
