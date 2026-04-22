// NS_CONTACT_POINT_OVERRIDE.js

window.NS_CONTACT_POINT_OVERRIDE = {
  "tables": {
    "NS_CONTACT_POINT_OVERRIDE": {
      "columns": {
        "NS_CONTACT_POINT_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "NS_CONTACT_POINT_OVERRIDE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NOTIFY_SUBJECT",
          "info": "GC3 notify subject. "
        },
        "PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": false
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE"
        },
        "CONTACT_POINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CONTACT_POINT",
          "info": "Contact point receiving the messages. "
        },
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GC3 business object id. "
        },
        "CONSOLIDATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_PROFILE",
          "info": "Whether messages should be consolidated using the provided profile."
        },
        "P_DATE_KEY": {
          "type": "NUMBER()",
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
        }
      },
      "fk_tables": []
    }
  }
};
