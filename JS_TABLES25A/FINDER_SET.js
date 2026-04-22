// FINDER_SET.js

window.FINDER_SET = {
  "tables": {
    "FINDER_SET": {
      "columns": {
        "FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "FINDER_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "FINDER_SET_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "QUERY_TABLE"
        },
        "FINDER_SET_XML": {
          "type": "CLOB",
          "nullable": true
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
        "USE_IN_MIGRATION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "BUSINESS_MONITOR_D",
        "DATA_QUEUE_DEF",
        "DEFAULT_FINDER_SET_ACCESS",
        "FINDER_SET_ACCESS",
        "FINDER_SET_XML",
        "FLEX_FIELD_DEF",
        "GLOBAL_SEARCH_ACCESS",
        "MIGRATION_OBJECT_GROUP"
      ]
    }
  }
};
