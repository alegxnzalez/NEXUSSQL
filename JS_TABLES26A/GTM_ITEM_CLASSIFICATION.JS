// GTM_ITEM_CLASSIFICATION.js

window.GTM_ITEM_CLASSIFICATION = {
  "tables": {
    "GTM_ITEM_CLASSIFICATION": {
      "description": "Item classification",
      "columns": {
        "GTM_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ITEM",
          "info": "The GID for the item that is having the classification type and code information added, updated, or removed."
},
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "The GID for the product classification type that is being added, updated, or removed. The product classification type qualifies/filters the values of the product classification code being added. For example the product classification type of HTS US is related to the product classification codes for the Harmonized Tariff Schedule of the United States. GTM will check to see if the product classification code is valid and matches the selected classification type."
},
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_CODE",
          "info": "The GID for the product classification code that is being added, updated, or removed for the item. The product classification code is qualified/filtered by the product classification type."
},
        "CLASSIFICATION_STATUS": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Classification status is a read only field that reflects the status of the product classification. For example, Classification Created, Classification Approved."
},
        "CLASSIFICATION_NOTES": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Classification notes is a notes field available to enter any hints or insights into the item classification reasoning."
},
        "APPROVER_NOTES": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Approver notes is a notes field is to capture any comments the classification approver may have related to their approval of this classification type and code to this particular item."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "GTM_ITEM_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A GID field available to enter any hints or insights into the item gtm_item_classification reasoning."
},
        "GTM_ITEM_CLASSIFICATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "An XID field available to enter any hints or insights into the item gtm_item_classification reasoning."
},
        "TRADE_DIRECTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "I",
                    "E",
                    "B"
          ],
          "info": "N/A"
},
        "CUSTOMS_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Customs description is a description field available to enter any hints or insights into the item customs reasoning."
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
        "BINDING_RULING_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Binding ruling number to justify classification"
},
        "BINDING_RULING_EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective date of the binding ruling"
},
        "CLASSIFICATION_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "User who does classification"
},
        "CLASSIFICATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date when classification is done"
},
        "REVIEW_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "User who reviews classification"
},
        "REVIEW_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date when review is done"
},
        "ELIGIBILITY_SCREENING_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "User who does eligibility screening"
},
        "ELIGIBILITY_SCREENING_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date when eligibility screening is done"
},
        "GTM_TARIFF_ROI_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TARIFF_ROI",
          "info": "Unique identifier for the gtm tariff rules of interpretation used to justify classification"
},
        "BINDING_RULING_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the binding rule expiration date."
},
        "GTM_PROD_CLASS_PURPOSE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_PURPOSE",
          "info": "Product Classification Purpose"
},
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Classification code for an item."
}
      },
      "fk_tables": [
        "GTM_ITEM_CLASS_REFNUM",
        "GTM_ITEM_CLASS_REMARK"
]
    }
  }
};