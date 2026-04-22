// ACC_OPRND_VISIBILITY_SET_D.js

window.ACC_OPRND_VISIBILITY_SET_D = {
  "tables": {
    "ACC_OPRND_VISIBILITY_SET_D": {
      "description": "This table stores the mapping between accessorial operand visibility set and rate geo cost operand RBI.",
      "columns": {
        "ACC_OPRND_VISIBILITY_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACC_OPRND_VISIBILITY_SET",
          "info": "Global unique identifier for the set of RBI to be visible for accessorial costs."
},
        "RATE_GEO_COST_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "Identifies the Rate Basis Item (RBI)."
},
        "RATE_GEO_COST_OPERAND_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "Field needed to complete foreign key into rate_geo_cost_operand."
},
        "POSITION": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Ordinal position of field within the set when generating output stream."
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