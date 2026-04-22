// LOCATION_PROFILE.js

window.LOCATION_PROFILE = {
  "tables": {
    "LOCATION_PROFILE": {
      "description": "This is an alternate method of grouping the locations by creating enumerated profiles. This allows flexibility to group locations in a profile and specify if they are compatible for delivery.",
      "columns": {
        "LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "LOCATION_PROFILE_GID contains the unique identifier for the location's profile."
},
        "LOCATION_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "LOCATION_PROFILE_XID contains the unique external identifier for the location profile."
},
        "LOCATION_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "LOCATION_PROFILE_NAME contains the name of the location profile."
},
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "ALLOCATION_RULE",
        "AUTO_APPROVE_RULE",
        "DRIVER",
        "DRIVER_TYPE",
        "LEG",
        "LINE_APPROVE_TOLERANCE",
        "LOCATION_PROFILE_DETAIL",
        "LOCATION_ROLE_PROFILE_CAL",
        "NFRC_RULE",
        "NFRC_RULE_INV_PARTY_CRITERIA",
        "OPERATIONAL_LOCATION_D",
        "ORDER_ROUTING_RULE",
        "PI_RESIDUE_COMPAT_D",
        "RATE_GEO",
        "RESOURCE_SCHEDULE",
        "RESOURCE_SCHEDULE_INSTANCE",
        "SECONDARY_CHARGE_RULE",
        "SHIPPING_AGENT_CONTACT",
        "SHIPPING_AGENT_CONTACT_PROFIT"
]
    }
  }
};