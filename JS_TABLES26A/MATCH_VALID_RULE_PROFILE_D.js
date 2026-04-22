// MATCH_VALID_RULE_PROFILE_D.js

window.MATCH_VALID_RULE_PROFILE_D = {
  "tables": {
    "MATCH_VALID_RULE_PROFILE_D": {
      "description": "Detail table for the set of match validation rules belonging to a match validation rule profile.",
      "columns": {
        "MATCH_VALID_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MATCH_VALID_RULE_PROFILE",
          "info": "Id for the group of validation rules"
},
        "MATCH_VALIDATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MATCH_VALIDATION_RULE",
          "info": "Id of validation rule belonging to this profile"
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
      "fk_tables": []
    }
  }
};