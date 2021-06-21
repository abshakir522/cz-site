<?php

/**
 * @file
 * Contains \Drupal\mymodule\Plugin\Block\RegistrationForm.
 */
namespace Drupal\my_module\Plugin\Block;
use Drupal\Core\Block\BlockBase;
/**
 * @Block(
 *  id = "reg_block",
 *  admin_label = @Translation("Registraion Form"),
 *  category = @Translation("Custom")
 * )
 */
class RegistrationForm extends BlockBase{
  /**
   * {@inheritdoc}
   */
  public function build() {
    $entity = \Drupal::entityTypeManager()->getStorage('user')->create(array());
    $formObject = \Drupal::entityTypeManager()
      ->getFormObject('user', 'register')
      ->setEntity($entity);
    $form = \Drupal::formBuilder()->getForm($formObject);
    unset($form['field_picture']);
    unset($form['field_phone']);
    // $form['mail']['#attributes']['placeholder'] = t('E-mailadres');
    // $form['pass']['#attributes']['placeholder'] = t('Wachtwood');
    // $form['']['#attributes']['placeholder'] = t('Wachtwood');
    // $form['pass']['und'][0]['value']['#attributes']['placeholder'] = t('Placeholder text');
    // $form['email']['und'][0]['value']['#attributes']['placeholder'] = t('Placeholder text');
    $form['actions']['submit']['#value'] = t('Registeren');
    return $form;

  }
}
