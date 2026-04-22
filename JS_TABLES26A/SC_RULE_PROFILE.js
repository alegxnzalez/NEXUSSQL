// SC_RULE_PROFILE.js

window.SC_RULE_PROFILE = {
  "tables": {
    "SC_RULE_PROFILE": {
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
        "SC_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique identifier to define the group profile for multiple secondary charge rules. The GID contains the domain name."
},
        "SC_RULE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "A unique identifier to define the group profile for multiple secondary charge rules. The XID does not contains the domain name."
},
        "SC_RULE_PROFILE_DESC": {
          "type": "VARCHAR2(400)",
          "nullable": true,
          "info": "A user-defined profile (group) description."
},
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": []
    }
  }
};