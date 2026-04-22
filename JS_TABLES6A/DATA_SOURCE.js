// DATA_SOURCE.js

window.DATA_SOURCE = {
  "tables": {
    "DATA_SOURCE": {
      "columns": {
        "DATA_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DATA_SOURCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DATA_DATABASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_DATABASE"
        },
        "MANAGER": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "GC3",
            "APPSERVER POOL",
            "APPSERVER JTS",
            "LOCAL JTS",
            "EXTERNAL JTS"
          ]
        },
        "JDBC_DRIVER": {
          "type": "VARCHAR2(255)",
          "nullable": false
        },
        "JDBC_URL": {
          "type": "VARCHAR2(4000)",
          "nullable": false
        },
        "TNS_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "SCHEMA": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "ORACLE_USER": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "ORACLE_PASSWORD": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "VPD_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "GL_USER"
        },
        "INITIALIZATION_COMMAND": {
          "type": "VARCHAR2(2000)",
          "nullable": true
        },
        "IS_PROFILING_LEAKS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_MULTI_USER": {
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
        "EDITION": {
          "type": "VARCHAR2(100)",
          "nullable": true
        }
      },
      "fk_tables": [
        "CONNECTION_POOL",
        "DATA_SOURCE_PROFILE_D"
      ]
    }
  }
};
