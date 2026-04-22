// MIGRATION_PROJECT.js

window.MIGRATION_PROJECT = {
  "tables": {
    "MIGRATION_PROJECT": {
      "columns": {
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
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PROJECT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PROJECT_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true
        },
        "PROJECT_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "EXPORT",
            "IMPORT"
          ]
        },
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "CURRENT_VERSION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PROCESSED_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "PROCESSED_VERSION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SEQUENCE_OVERRIDE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_REFRESH_CACHE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_RAISE_LIFETIME_EVENT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "COMMIT_SCOPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "PK",
            "GROUP"
          ]
        },
        "SOURCE_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Stores the source project gid used when imported using web service "
        },
        "WEB_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "WEB_SERVICE",
          "info": "Stores the web service gid of the web service used when imported using web service"
        }
      },
      "fk_tables": [
        "MIGRATION_OBJECT_GROUP"
      ]
    }
  }
};
