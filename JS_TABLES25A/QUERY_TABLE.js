// QUERY_TABLE.js

window.QUERY_TABLE = {
  "tables": {
    "QUERY_TABLE": {
      "columns": {
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "QUERY_TABLE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "QUERY_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false
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
        "ACTION_DEF",
        "ACTION_DEF_ARG",
        "ACTION_DEF_SEL_PARAM",
        "ACTION_DRAG",
        "APP_SHARED_ITEM",
        "BUSINESS_MONITOR_D",
        "DEFAULT_FINDER_SET_ACCESS",
        "DERIVED_DATA_OP_IMPL",
        "DERIVED_FIELD",
        "DERIVED_FIELD_PARAMETER",
        "FINDER_LINK",
        "FINDER_SET",
        "FLEX_FIELD_DEF",
        "REPORT_PARAMETER",
        "USER_FAVORITE_TABLE"
      ]
    }
  }
};
