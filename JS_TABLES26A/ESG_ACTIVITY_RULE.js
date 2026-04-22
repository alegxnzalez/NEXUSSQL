// ESG_ACTIVITY_RULE.js

window.ESG_ACTIVITY_RULE = {
  "tables": {
    "ESG_ACTIVITY_RULE": {
      "description": "This table is used for storing the rules for creating the emission activity.",
      "columns": {
        "ESG_ACTIVITY_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The globally unique ID of an emission activity rule."
},
        "ESG_ACTIVITY_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The unique ID of an emission activity rule specific to a domain."
},
        "ESG_ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ESG_ACTIVITY_TYPE",
          "info": "The emission activity type for which the emission activity rule is defined."
},
        "ESG_ACTIVITY_RULE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The name of the emission activity rule."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the emission activity rule."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This flag determines whether the emission activity rule is active or not."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date of the emission activity rule."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date of the emission activity rule."
},
        "PRIORITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The lower the priority, the higher the preference for the given emission activity rule.  So 1 is the highest priority."
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Mode profile for which the emission activity rule is defined."
},
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Region for which the emission activity rule is defined."
},
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_DISTANCE",
          "info": "Rate distance is used for calculating distance based emissions for emission activity. For example, the distance between the stops of a shipment, using which emissions are calculated by using intensity factor."
},
        "GTM_DT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "Data configuration to copy the data from a business entity, like a shipment, to the emission activity record."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Accessorial Code that needs to be associated with the emission activity that would be generated based on this rule."
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
},
        "EMISSION_ALLOCATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EMISSION_ALLOCATION_RULE",
          "info": "Emission Allocation Rule to be used in allocating emissions for the emission activity generated using this emission activity rule."
}
      },
      "fk_tables": [
        "ESG_ACTIVITY",
        "ESG_ACT_RULE_REMARK"
]
    }
  }
};