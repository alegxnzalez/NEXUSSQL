// BS_STATUS_CODE_PROFILE.js

window.BS_STATUS_CODE_PROFILE = {
  "tables": {
    "BS_STATUS_CODE_PROFILE": {
      "columns": {
        "BS_STATUS_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BS_STATUS_CODE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
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
}
      },
      "fk_tables": [
        "BS_STATUS_CODE_PROFILE_D",
        "BS_STATUS_GROUP_STATUS_CODE_P",
        "DM_RULE_D"
]
    }
  }
};