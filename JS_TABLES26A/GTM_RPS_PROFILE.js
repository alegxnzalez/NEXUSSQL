// GTM_RPS_PROFILE.js

window.GTM_RPS_PROFILE = {
  "tables": {
    "GTM_RPS_PROFILE": {
      "description": "This table stores the Restricted Party Screening Profile details which is used to consolidate restricted party screening services.",
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
        "GTM_RPS_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the unique identifier for the Restricted Party Service Profile."
},
        "GTM_RPS_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the XID unique identifier for the Restricted Party Service Profile."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Contains text for the description of the Restricted Party Service Profile."
}
      },
      "fk_tables": [
        "GTM_RPS_PROFILE_PREF_CSET"
]
    }
  }
};