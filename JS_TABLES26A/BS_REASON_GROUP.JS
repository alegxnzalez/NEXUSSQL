// BS_REASON_GROUP.js

window.BS_REASON_GROUP = {
  "tables": {
    "BS_REASON_GROUP": {
      "columns": {
        "BS_REASON_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BS_REASON_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "BS_REASON_GROUP_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "BS_REASON_GROUP_DESCRIPTION": {
          "type": "VARCHAR2(512)",
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
      "fk_tables": [
        "AGENT_ACTION_DETAILS",
        "AUDIT_TRAIL",
        "BS_QUICK_CODE",
        "BS_REASON_GROUP_PROFILE_D",
        "BS_REASON_GROUP_REASON_CODE_P",
        "QUICK_EVENT"
]
    }
  }
};