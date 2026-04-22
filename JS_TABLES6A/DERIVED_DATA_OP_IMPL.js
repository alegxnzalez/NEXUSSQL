// DERIVED_DATA_OP_IMPL.js

window.DERIVED_DATA_OP_IMPL = {
  "tables": {
    "DERIVED_DATA_OP_IMPL": {
      "columns": {
        "DERIVED_DATA_OP_IMPL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the unique identifier for the derived data operations implementation "
        },
        "DERIVED_DATA_OP_IMPL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the unique external identifier for the derived data operations implementation "
        },
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "QUERY_TABLE",
          "info": "Unique identifier for the query table "
        },
        "ALIAS": {
          "type": "VARCHAR2(5)",
          "nullable": false,
          "info": "Alias for the implementation "
        },
        "JAVA_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "JAVA_PLUGIN",
          "info": "Unique identifier for the java plugin used by this implementation"
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
      "fk_tables": [
        "DERIVED_FIELD"
      ]
    }
  }
};
