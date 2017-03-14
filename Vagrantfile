Vagrant.configure('2') do |config|

  config.vm.box = 'bento/ubuntu-16.10'

  # config.vm.network "forwarded_port", guest: 12345, host: 12345

  config.ssh.forward_agent = true

  config.vm.provider 'virtualbox' do |vb|
    vb.memory = '1024'
  end

  config.vm.provision 'ansible_local' do |ansible|

    ansible.install_mode = :pip

    ansible.version = 'latest'

    ansible.galaxy_roles_path = 'tmp/ansible-roles'

    ansible.galaxy_role_file = 'cm/requirements.yml'

    ansible.playbook = 'cm/vagrant.yml'

    # ansible.inventory_path = 'cm/production'

    ansible.sudo = true

    ansible.verbose = 'vv'

  end

end
