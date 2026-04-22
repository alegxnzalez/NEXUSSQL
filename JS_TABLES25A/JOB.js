// JOB.js

window.JOB = {
  "tables": {
    "JOB": {
      "columns": {
        "JOB_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the job. "
        },
        "JOB_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the job. "
        },
        "JOB_QUERY_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "ORDER RELEASE",
            "ORDER MOVEMENT"
          ],
          "info": "Query type options are Order Release or Order Movement. Field is used to identify the order object that you want to associate with the job. "
        },
        "JOB_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JOB_TYPE",
          "info": "Job type is based on a pre-defined list of job types that have been defined in the system. Job type is used for informational purposes. "
        },
        "CONSOLIDATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_TYPE",
          "info": "The GID for the consolidation type. Consolidation type can be assigned to a job for informational purposes. Consolidation types can also be included in a consolidation type profile that can then be used as criteria for the automatic assignment of non-freight related charges to a job. "
        },
        "IS_MEMO_BL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicate if the documentation process should create one BL doc for all the shipments in the job. If Y, use "
        },
        "MEMO_BL_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Indicate which shipment will be used to generate B/L. This field can not be empty when IS_MEMO_BL is Y. "
        },
        "MOVE_PERSPECTIVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MOVE_PERSPECTIVE",
          "info": "The GID for the move perspective. Available options include Import or Export. Move perspective is used to further identify to the type of job. You can predefine additional move perspectives in Power Data. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversions; if null, the latest conversion should be used. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used. "
        },
        "CONSOL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOL",
          "info": "The GID for the consol. If a job has a consol assigned to it, then this field will hold the unique global identifier of that related consol. A consol is essentially an \"empty shipment\" that orders can be booked into. "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Only users with ADMIN status can mark data for purging. Only Database administrators can schedule and run the purge process. Detailed configuration of the purge process takes place when the system is installed. For more information, see your System Administrator. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_CURRENCY1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "First currency attribute field (currency flex field) to capture the entered currency value of the additional currency information. Data Type NUMBER. "
        },
        "ATTRIBUTE_CURRENCY1_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "First currency attribute field (currency flex field) to capture the base currency value of the additional currency information. Data Type NUMBER. "
        },
        "ATTRIBUTE_CURRENCY1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the first currency attribute field. Data Type VARCHAR2(101). "
        },
        "ATTRIBUTE_CURRENCY2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Second currency attribute field (currency flex field) to capture the entered currency value of the additional currency information. Data Type NUMBER. "
        },
        "ATTRIBUTE_CURRENCY2_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Second currency attribute field (currency flex field) to capture the base currency value of the additional currency information. Data Type NUMBER. "
        },
        "ATTRIBUTE_CURRENCY2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the second currency attribute field. Data Type VARCHAR2(101). "
        },
        "ATTRIBUTE_CURRENCY3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Third currency attribute field (currency flex field) to capture the entered currency value of the additional currency information. Data Type NUMBER. "
        },
        "ATTRIBUTE_CURRENCY3_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Third currency attribute field (currency flex field) to capture the base currency value of the additional currency information. Data Type NUMBER. "
        },
        "ATTRIBUTE_CURRENCY3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the third currency attribute field. Data Type VARCHAR2(101)."
        }
      },
      "fk_tables": [
        "JOB_BILL_JOIN",
        "JOB_INVOLVED_PARTY",
        "JOB_ORDER_MOVEMENT_JOIN",
        "JOB_ORDER_RELEASE_JOIN",
        "JOB_REFNUM",
        "JOB_REMARK",
        "JOB_STATUS",
        "JOB_TEXT",
        "JOB_TR_EVENT_CONTACT",
        "SHIPMENT",
        "SHIPMENT_AGENT_RSP"
      ]
    }
  }
};
