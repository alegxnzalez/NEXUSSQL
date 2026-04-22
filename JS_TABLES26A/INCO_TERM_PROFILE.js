// INCO_TERM_PROFILE.js

window.INCO_TERM_PROFILE = {
  "tables": {
    "INCO_TERM_PROFILE": {
      "description": "A collection of INCO terms.",
      "columns": {
        "INCO_TERM_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid for the profile (collection) of INCO terms"
},
        "INCO_TERM_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier for the profile (collection) of INCO terms."
},
        "INCO_TERM_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name of the collection of INCO terms."
},
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Must be Y or N."
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
        "GTM_COMPLIANCE_RULE",
        "INCO_TERM_PROFILE_D",
        "ITINERARY",
        "NFRC_RULE"
]
    }
  }
};