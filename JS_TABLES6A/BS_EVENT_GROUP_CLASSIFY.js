// BS_EVENT_GROUP_CLASSIFY.js

window.BS_EVENT_GROUP_CLASSIFY = {
  "tables": {
    "BS_EVENT_GROUP_CLASSIFY": {
      "columns": {
        "BS_EGROUP_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BS_EGROUP_CLASS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE"
        },
        "BS_EVENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "BS_EVENT_GROUP"
        },
        "BS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE"
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
      "fk_tables": []
    }
  }
};
