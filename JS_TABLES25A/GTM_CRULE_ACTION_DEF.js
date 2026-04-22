// GTM_CRULE_ACTION_DEF.js

window.GTM_CRULE_ACTION_DEF = {
  "tables": {
    "GTM_CRULE_ACTION_DEF": {
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
        "GTM_CRULE_ACTION_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Action definition unique gid. "
        },
        "GTM_CRULE_ACTION_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Action definition Xid. "
        },
        "ACTION_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Name of the action definition. "
        },
        "GTM_CONTROL_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTROL_CATEGORY",
          "info": "Gtm control category Gid. "
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Data query type Gid. "
        },
        "LAYOUT_XML": {
          "type": "CLOB",
          "nullable": true,
          "info": "Used to render the UI. "
        },
        "HANDLER_CLASS": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "info": "Handling class name of this action."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "GTM_CRULE_ACTION"
      ]
    }
  }
};
