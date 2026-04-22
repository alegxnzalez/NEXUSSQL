// SPECIAL_SERVICE_PROFILE.js

window.SPECIAL_SERVICE_PROFILE = {
  "tables": {
    "SPECIAL_SERVICE_PROFILE": {
      "description": "Profile used in OTM to create a list of compatible/not compatible special services",
      "columns": {
        "SPECIAL_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "id for the profile"
},
        "SPECIAL_SERVICE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "indicates if this profile is 'includes' or 'does not include' profile"
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
        "SC_RULE_CONTRACT",
        "SECONDARY_CHARGE_RULE",
        "SPECIAL_SERVICE_PROFILE_D"
]
    }
  }
};