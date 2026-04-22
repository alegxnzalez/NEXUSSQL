// BS_RESPONSIBLE_PARTY.js

window.BS_RESPONSIBLE_PARTY = {
  "tables": {
    "BS_RESPONSIBLE_PARTY": {
      "columns": {
        "BS_RESPONSIBLE_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BS_RESPONSIBLE_PARTY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "BS_RESPONSIBLE_PARTY_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "BS_RESPONSIBLE_PARTY_DESC": {
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
        "BS_RESP_PARTY_PROFILE_D",
        "BS_RESP_PARTY_STATUS_GROUP_P",
        "IE_SHIPMENTSTATUS",
        "OBS_STATUS_HISTORY",
        "ORDER_RELEASE_STATUS_HISTORY",
        "QUICK_EVENT",
        "SKU_EVENT"
]
    }
  }
};