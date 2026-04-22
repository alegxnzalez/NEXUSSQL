// SAVED_CONDITION.js

window.SAVED_CONDITION = {
  "tables": {
    "SAVED_CONDITION": {
      "columns": {
        "SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SAVED_CONDITION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
        },
        "USER_CONDITION_NAME": {
          "type": "VARCHAR2(120)",
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
        "AGENT",
        "APP_ACTION",
        "APP_ACTION_CHECK_ACCESS",
        "APP_ACTION_REASON_ACCESS",
        "AUTO_SEC_RES_PROFILE",
        "COMPLEX_EXPRESSION_DETAIL",
        "DOCUMENT_DEF_CHECK",
        "SAVED_CONDITION_QUERY",
        "STATUS_FUNCTOR",
        "TRANSACTIONAL_EVENT"
      ]
    }
  }
};
