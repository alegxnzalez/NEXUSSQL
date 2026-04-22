// LNM_RESOURCE_SCHEDULE_INS.js

window.LNM_RESOURCE_SCHEDULE_INS = {
  "tables": {
    "LNM_RESOURCE_SCHEDULE_INS": {
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
        "RESOURCE_SCHEDULE_INSTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique Resource Schedule Instance."
},
        "RESOURCE_SCHEDULE_INSTANCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The Resource Schedule Instance XID."
},
        "COUNT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The actual number of available resources."
},
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Actual date and time of day that the resources start their shift"
},
        "RES_SCH_INST_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name of the Resource Schedule Instance."
},
        "RES_SCH_INST_DESCRIPTION": {
          "type": "VARCHAR2(400)",
          "nullable": true,
          "info": "Description of the Resource Schedule Instance."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "A text flex field as defined in OTM for this object."
},
        "DURATION": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Length of time in days (D), hours (H), and minutes (M) that it takes the resources to travel from the start location to the end location. This include all shipments within the work assignment between the source and destination locations."
},
        "DURATION_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The duration base."
},
        "DURATION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The duration unit of measure (UOM) code."
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "A date flex field as defined in OTM for this object."
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The required equipment group profile ID."
},
        "RESOURCE_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The resource schedule from which this instance was generated"
},
        "START_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Start Location ID."
},
        "FINISH_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The End Location ID."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The rate offering ID used to cost and drive shipments when creating and stringing together shipments into a work assignment."
},
        "DRIVER_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The driver type ID. This is required when the resource schedule has a resource type of DRIVER."
},
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LNM_SCENARIO",
          "info": "The Logistics Network Modeling scenario ID for the work assignment."
},
        "START_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for the start location profile."
},
        "END_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for the end location profile."
}
      },
      "fk_tables": []
    }
  }
};