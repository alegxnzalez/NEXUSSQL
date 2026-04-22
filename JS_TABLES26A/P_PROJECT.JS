// P_PROJECT.js

window.P_PROJECT = {
  "tables": {
    "P_PROJECT": {
      "description": "Procurement project",
      "columns": {
        "P_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "P_PROJECT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "BEGIN_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Defines the effective date of the procured rates"
},
        "END_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Defines the expiration date of the procured rates"
},
        "LANE_SUMMARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LANE_SUMMARY",
          "info": "Defines the lanes that are being put out to bid for this procurement project"
},
        "CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSTRAINT_SET"
},
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLANNING_PARAMETER_SET"
},
        "IS_CAPACITY_SHIPMENTCOUNT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "PRIOR_BIDROUND_CHK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
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
},
        "RATE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO"
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY1": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY1_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY2": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY2_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY3": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ATTRIBUTE_CURRENCY3_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "this column will identifies the rows which will be purged"
}
      },
      "fk_tables": [
        "EQUIPMENT_CONVERSION",
        "P_BID_ROUND",
        "P_PROJECT_RATE_OFFERING",
        "P_PROJECT_STATUS"
]
    }
  }
};