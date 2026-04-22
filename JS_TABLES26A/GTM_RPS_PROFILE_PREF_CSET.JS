// GTM_RPS_PROFILE_PREF_CSET.js

window.GTM_RPS_PROFILE_PREF_CSET = {
  "tables": {
    "GTM_RPS_PROFILE_PREF_CSET": {
      "description": "This table contains information related to the service preferences that must be run on a party based on the constraint set, for the Restricted Party Screening Profile.",
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
          "foreign_key": "GTM_RPS_PROFILE",
          "info": "The Restricted Party Service Profile GID for which the service preferences are configured."
},
        "GTM_RPS_PROFILE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The Restricted Party Service Profile Sequence Number that is part of the primary key."
},
        "GTM_SERVICE_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_SERVICE_PREF",
          "info": "The service preference associated with the Restricted Party Service Profile."
},
        "GTM_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "The constraints that should be evaluated when determining whether the service preference can be run on the party."
}
      },
      "fk_tables": []
    }
  }
};