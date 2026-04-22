// RESOURCE_SCHEDULE_INSTANCE.js

window.RESOURCE_SCHEDULE_INSTANCE = {
  "tables": {
    "RESOURCE_SCHEDULE_INSTANCE": {
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
          "key_value": true
        },
        "RESOURCE_SCHEDULE_INSTANCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "RESOURCE_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RESOURCE_SCHEDULE",
          "info": "FK reference to the Resource Schedule from which this instance was generated"
        },
        "START_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "FINISH_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "COUNT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "DURATION": {
          "type": "NUMBER()",
          "nullable": false
        },
        "DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "DURATION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
        },
        "DRIVER_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER_TYPE"
        },
        "RES_SCH_INST_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "RES_SCH_INST_DESCRIPTION": {
          "type": "VARCHAR2(400)",
          "nullable": true
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
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
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
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
        }
      },
      "fk_tables": [
        "RES_SCH_INST_REMARK",
        "WORK_ASSIGNMENT"
      ]
    }
  }
};
