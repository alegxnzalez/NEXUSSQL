// BS_STATUS_GROUP.js

window.BS_STATUS_GROUP = {
  "tables": {
    "BS_STATUS_GROUP": {
      "columns": {
        "BS_STATUS_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BS_STATUS_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "BS_STATUS_GROUP_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "BS_STATUS_GROUP_DESCRIPTION": {
          "type": "VARCHAR2(512)",
          "nullable": true
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE"
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
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "This field represents status group code."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AGENT_ACTION_DETAILS",
        "AUDIT_TRAIL",
        "BS_QUICK_CODE",
        "BS_STATUS_GROUP_PROFILE_D",
        "BS_STATUS_GROUP_REASON_GROUP_P",
        "BS_STATUS_GROUP_STATUS_CODE_P",
        "GTM_DECL_MESSAGE",
        "GTM_TRANSACTION",
        "QUICK_EVENT"
]
    }
  }
};