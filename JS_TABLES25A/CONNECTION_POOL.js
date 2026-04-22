// CONNECTION_POOL.js

window.CONNECTION_POOL = {
  "tables": {
    "CONNECTION_POOL": {
      "columns": {
        "DATA_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_SOURCE"
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "INITIAL_CAPACITY": {
          "type": "NUMBER(5)",
          "nullable": false
        },
        "CAPACITY_INCREMENT": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "MAX_CAPACITY": {
          "type": "NUMBER(5)",
          "nullable": false
        },
        "REFRESH_INTERVAL": {
          "type": "NUMBER()",
          "nullable": true
        },
        "REFRESH_INTERVAL_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "REFRESH_INTERVAL_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SHRINK_WHEN_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "LRU",
            "INITIAL"
          ]
        },
        "SHRINK_INTERVAL": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SHRINK_INTERVAL_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "SHRINK_INTERVAL_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TEST_CONNECTIONS_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "NEVER",
            "RELEASE",
            "RESERVE",
            "BOTH"
          ]
        },
        "INIT_WHEN_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "STATIC",
            "FIRST USE",
            "DYNAMIC"
          ]
        },
        "LOGIN_DELAY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LOGIN_DELAY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "LOGIN_DELAY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WAIT_TIMEOUT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WAIT_TIMEOUT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "WAIT_TIMEOUT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_DEDICATED": {
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
        },
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "R",
            "H"
          ]
        }
      },
      "fk_tables": [
        "CONNECTION_POOL_PROPERTY"
      ]
    }
  }
};
